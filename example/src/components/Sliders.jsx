import React from 'react'
import CodeRenderer from '../common/CodeRenderer';

/**
 * Renders different types of sliders.
 *
 * @author Hari Gangadharan
 */
const Sliders = () => (
  <div>
    <CodeRenderer name={'sliders/BasicSlider'} />
    <CodeRenderer name={'sliders/StepSlider'} />
    <CodeRenderer name={'sliders/VerticalSlider'} />
  </div>
);

export default Sliders;
