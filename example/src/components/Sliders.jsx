import React from 'react'
import CodeRenderer from '../common/CodeRenderer';

const Sliders = () => (
  <div>
    <CodeRenderer name={'sliders/BasicSlider'} />
    <CodeRenderer name={'sliders/StepSlider'} />
    <CodeRenderer name={'sliders/VerticalSlider'} />
  </div>
);
Sliders.displayName = 'Sliders';

export default Sliders;
