import { createDocument, Editor, Plugin } from '@edtr-io/core'
import { hintPlugin } from '@edtr-io/plugin-hint'
import { textPlugin } from '@edtr-io/plugin-text'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

const plugins: Record<string, Plugin<any>> = {
  hint: hintPlugin,
  text: textPlugin
}

storiesOf('SolutionPlugin', module).add('Empty example', () => {
  const state = createDocument({
    plugin: 'hint'
  })
  return <Editor plugins={plugins} defaultPlugin="textPlugin" state={state} />
})
