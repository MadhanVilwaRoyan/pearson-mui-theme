import React from 'react'
import CodeRenderer from '../common/CodeRenderer';

/**
 * Renders/demos tab component.
 *
 * @author Hari Gangadharan
 */
const Tabs = () => (
  <div>
    <CodeRenderer name={'tabs/SimpleTabs'} />
    <CodeRenderer name={'tabs/DarkModeTabs'} />
    <CodeRenderer name={'tabs/SimpleVerticalTabs'} />
    <CodeRenderer name={'tabs/CustomVerticalTabs'} />
  </div>
);
Tabs.displayName = 'Tabs';

export default Tabs;
