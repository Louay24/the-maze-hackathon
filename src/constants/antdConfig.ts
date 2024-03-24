import { ThemeConfig } from 'antd';

import { useEffect, useState } from 'react';

const useThemeConfig = () => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>();

  useEffect(() => {
    const variables = document.querySelector('.App')?.computedStyleMap();

    const themeConfig = {
      token: {
        fontFamily: 'Manrope, sans serif',
        sizeUnit: 10,
        fontSize: 20,
      },

      components: {
        Button: {
          borderRadius: 16,
          colorText: (variables?.get('--royal-blue') as string[])[0],
          colorLink: (variables?.get('--pale-gray') as string[])[0],
          colorPrimary: (variables?.get('--royal-blue') as string[])[0],
        },
      },

      Progress: {
        colorBgContainer: (variables?.get('--royal-blue') as string[])[0],
      },

      Input: {
        controlHeightLG: 78,
      },
    };

    setThemeConfig(themeConfig);
  }, []);

  return themeConfig;
};

export { useThemeConfig };
