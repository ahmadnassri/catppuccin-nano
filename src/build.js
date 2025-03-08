#!/usr/bin/env -S node --no-warnings

/* eslint-disable security/detect-object-injection, n/no-unsupported-features/node-builtins */

import { flavors } from '@catppuccin/palette'
import { glob, mkdir, readFile, writeFile } from 'node:fs/promises'

import colorMap from './color-map.json' with { type: 'json' }

// shortcut for direnv and mkdir
const recursive = true

const colorRegExp = new RegExp(Object.keys(colorMap).join('|'), 'g')

/**
 *
 * @param {string} rgb rgb object
 * @param {number} rgb.r red
 * @param {number} rgb.g green
 * @param {number} rgb.b blue
 * @returns {string} the short hex value
 */
function convert ({ r, g, b }) {
  r = Math.round(r / 17).toString(16)
  g = Math.round(g / 17).toString(16)
  b = Math.round(b / 17).toString(16)

  return `#${r}${g}${b}`.toUpperCase()
}

/**
 *
 * @param {object} colors flavor colors
 * @param {string} content file content
 * @returns {string} content with colors replaced
 */
function replaceAll (colors, content) {
  return content.replaceAll(colorRegExp, name => colors[name])
}

// prepare colors
const colors = {}

for (const [name, flavor] of Object.entries(flavors)) {
  // set new object
  colors[name] = {}

  for (const [nanoColor, catColor] of Object.entries(colorMap)) {
    colors[name][nanoColor] = convert(flavor.colors[catColor].rgb)
  }
}

const PATH_NANORC_SOURCE = process.env.NANORC_SOURCE ?? '/usr/share/nano'
const PATH_NANORC_TARGET = process.env.NANORC_TARGET ?? './dist'

const content = []

// read all the files
for await (const file of glob('*.nanorc', { cwd: PATH_NANORC_SOURCE })) {
  content.push({
    file,
    content: await readFile(`${PATH_NANORC_SOURCE}/${file}`, 'utf8')
  })
}

// include our special .nanorc file
content.push({
  file: '.nanorc',
  content: await readFile('./src/.nanorc', 'utf8')
})

// loop the flavors
for (const name of Object.keys(flavors)) {
  // create destination folder
  await mkdir(`${PATH_NANORC_TARGET}/${name}`, { recursive })

  await Promise.all(
    content.map(
      ({ file, content }) => writeFile(`${PATH_NANORC_TARGET}/${name}/${file}`, replaceAll(colors[name], content))
    )
  )
}
