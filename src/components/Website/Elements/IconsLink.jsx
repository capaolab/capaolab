import React from 'react'
import Link from "next/link";

import { UI_CONFIGS } from '@/settings/uiConfigs';

function IconsLink({ name, url, css }) {
  return (
    <Link href={url} className="flex">
      <iconify-icon
        icon={name}
        width={UI_CONFIGS.ICONS.menu.width}
        height={UI_CONFIGS.ICONS.menu.height}
      >
      </iconify-icon>
    </Link>
  )
}

export default IconsLink