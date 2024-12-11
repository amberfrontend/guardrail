import { useState } from 'react';
import './App.css';

import Button from './elements/Button/Button';
import Tag from './elements/Tag/Tag';
import Link from './elements/Link/Link';
import Toggle from './elements/Toggle/Toggle';

import Combobox from './aggregates/Combobox/Combobox';

function App() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);

  return (
    <>
      <Link mainId="testing" type="bypass-block" linkText="Skip to main" />
      <Link
        type="image-link"
        ariaLabel="I'm an image link"
        href="/fjdksl"
        imageSrc="data:image/jpeg;base64,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"
      />
      Stuff before the link{' '}
      <Link
        style="text"
        type="regular"
        href="/"
        newWindowText="Opens in a new window"
        linkText="I'm a regular link"
      />{' '}
      stuff after. <br />
      <Link style="text" type="regular" href="/" linkText="Same window" />
      <Button
        type="icon-only"
        ariaLabel="Lookie here"
        icon="chevronUp"
        onClick={() => {}}
        onKeyDown={() => {}}
        onTouchStart={() => {}}
      />
      <Button
        type="overlay-trigger"
        ariaControls="id"
        ariaExpanded={false}
        onClick={() => {}}
        onKeyDown={() => {}}
        onTouchStart={() => {}}
      >
        Overlay
      </Button>
      <Toggle
        labels={{ primary: 'Door handle', off: 'Off', on: 'On' }}
        onChange={() => {
          setIsChecked1(!isChecked1);
          console.log(isChecked1);
        }}
      />
      <Toggle
        labels={{ primary: 'Bedroom', off: 'Off', on: 'On' }}
        helperText="Toggle on and off"
        renderChecked={isChecked2}
        onChange={() => {
          setIsChecked2(!isChecked2);
          console.log(isChecked2);
        }}
      />
      <br />
      <br />
      <br />
      {/* <IconButton
        ariaLabel="Icon"
        icon="close"
        variant="utility"
        size="medium"
        onClick={() => {}}
        onKeyDown={() => {}}
        onTouchStart={() => {}}
      />
      <IconButton
        ariaLabel="Icon"
        icon="close"
        variant="utility"
        size="large"
        onClick={() => {}}
        onKeyDown={() => {}}
        onTouchStart={() => {}}
      />
      <IconButton
        ariaLabel="Icon"
        icon="forward"
        onClick={() => {}}
        onKeyDown={() => {}}
        onTouchStart={() => {}}
      /> */}
      <Tag>Tag</Tag>
      <Tag onRemove={() => {}}>Tag</Tag>
      {/* <OverlayTriggerButton
        ariaControls="yup"
        ariaExpanded={false}
        variant="primary"
        onClick={() => {}}
        onKeyDown={() => {}}
        onTouchStart={() => {}}
      >
        This is cool
      </OverlayTriggerButton> */}
      <div id="yup"></div>
      <Combobox
        label="Test"
        options={[
          { label: 'Test', selected: false },
          { label: 'Test 2', selected: false },
        ]}
        onSelected={() => {}}
      />
      <div id="testing">Bottom</div>
    </>
  );
}

export default App;
