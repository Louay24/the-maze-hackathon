import React from 'react';
import { FilterIcon } from 'src/assets/icons/FilterIcon/FilterIcon';
import { PlusIcon } from 'src/assets/icons/PlusIcon/PlusIcon';
import { SearchIcon } from 'src/assets/icons/SearchIcon/SearchIcon';
import { Button } from 'src/components/Button/Button';
import { IconBox } from 'src/components/IconBox/IconBox';
import { Input } from 'src/components/Input/Input';
import { useLanguage } from 'src/providers/translation/LanguageContext';

export const SpacesHeader = () => {
  const { t } = useLanguage();
  return (
    <div className="spaces_toolbar">
      <div className="spaces_toolbar-filter">
        <Input
          className="navbar_search"
          prefix={<SearchIcon />}
          placeholder={t('search-for-something')}
        />
        <IconBox icon={<FilterIcon />} />
      </div>
      <Button icon={<PlusIcon />} type="primary">
        Create space
      </Button>
    </div>
  );
};
