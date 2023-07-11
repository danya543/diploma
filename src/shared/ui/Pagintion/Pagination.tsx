import { ReactComponent as IconLeft } from '~/assets/icons/IconChevronLeftPag.svg';
import { ReactComponent as IconRight } from '~/assets/icons/IconChevronRightPag.svg';

import paginationStyle from './Pagination.module.scss';
import { Button } from '../Button/Button';
import { ButtonAppearance } from '../Button/Button.types';

export const Pagination = ({
  page,
  setPage,
  numberPage
}: {
  page: number;
  setPage: (page: number) => void;
  numberPage: number;
}) => {
  return (
    <div className={paginationStyle.container}>
      <Button
        text={'1'}
        onClick={() => {
          setPage(1);
        }}
        appearance={ButtonAppearance.pagination}
        style={page === 1 ? { display: 'none' } : { display: 'block' }}
      />
      <Button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
        iconLeft={<IconLeft />}
        appearance={ButtonAppearance.pagination}
        style={page === 1 ? { display: 'none' } : { display: 'block' }}
      />
      <span>{numberPage !== 0 && page}</span>
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
        style={
          page === numberPage || numberPage === 0
            ? { display: 'none' }
            : { display: 'block' }
        }
        appearance={ButtonAppearance.pagination}
        iconLeft={<IconRight />}
      />
      <Button
        text={numberPage}
        onClick={() => {
          setPage(+numberPage);
        }}
        appearance={ButtonAppearance.pagination}
        style={
          page === numberPage || numberPage === 0
            ? { display: 'none' }
            : { display: 'block' }
        }
      />
    </div>
  );
};
