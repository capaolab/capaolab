'use client'
import React, { useState } from 'react';

function UpcomingForm() {
  const [isFocus, setIsFocus] = useState(false);

  const handleMouseEnter = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <form action="">
      <fieldset className="inputEmail">
        <label htmlFor="upcoming-email">
          <iconify-icon
            class={isFocus ? "text-white" : "text-terracota-100"}
            icon="arcticons:huawei-email"
            width={25}
            height={25}
          >
          </iconify-icon>
        </label>
        <input
          onFocus={handleMouseEnter}
          onBlur={handleBlur}
          name='upcoming-email'
          type="email"
          placeholder="jhonD@example.com" />
      </fieldset>
      <button className="btnSubmit mt-4">Subscribe</button>
    </form>
  )

}

export default UpcomingForm