import React from 'react'
import CodeRenderer from '../common/CodeRenderer';

/**
 * Renders/demos various styles of buttons.
 *
 * @author Hari Gangadharan
 */
const Buttons = () => (
  <div>
    <CodeRenderer name={'buttons/PrimaryButtons'} />
    <CodeRenderer name={'buttons/CtaButtons'} />
    <CodeRenderer name={'buttons/TertiaryButtons'} />
    <CodeRenderer name={'buttons/DefaultButtons'} />
    <CodeRenderer name={'buttons/DisabledButtons'} />
  </div>
);

export default Buttons;
