import { createDocument } from '@edtr-io/core'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Story } from '.'

storiesOf('Spoiler Plugin', module).add('Empty example', () => {
  const state = createDocument({
    plugin: 'spoiler'
  })
  return <Story state={state} />
})