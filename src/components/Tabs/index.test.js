import React, { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { Tabs, TabsNavigation, TabsContent, TabPane } from 'components/Tabs';

const Component = () => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <Tabs>
      <TabsNavigation
        items={[
          {
            label: 'Tab #1',
            onClick: () => setTabActive(0),
            active: tabActive === 0
          },
          {
            label: 'Tab #2',
            onClick: () => setTabActive(1),
            active: tabActive === 1
          }
        ]}
      />

      <TabsContent>
        <TabPane active={tabActive === 0}>This is TabPane 1</TabPane>

        <TabPane active={tabActive === 1}>This is TabPane 2</TabPane>
      </TabsContent>
    </Tabs>
  );
};

describe('components/Tabs', () => {
  it('renders', () => {
    render(<Component />);

    expect(screen.getByText('Tab #1')).toBeInTheDocument();
    expect(screen.getByText('Tab #2')).toBeInTheDocument();
    expect(screen.getByText('This is TabPane 1')).toBeInTheDocument();
    expect(screen.getByText('This is TabPane 2')).toBeInTheDocument();
  });

  it('update active tab', async () => {
    render(<Component />);

    const tabNavigation2 = screen.getByText('Tab #2');
    expect(screen.getByText('This is TabPane 1')).toBeVisible();
    expect(screen.getByText('This is TabPane 2')).not.toBeVisible();

    fireEvent.click(tabNavigation2);
    await waitFor(() => {
      expect(screen.getByText('This is TabPane 1')).not.toBeVisible();
      expect(screen.getByText('This is TabPane 2')).toBeVisible();
    });
  });
});
