import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '../../components/ui/button';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  ),
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn('gap-1 pl-2.5', className)} {...props}>
    <i className="text-[#9e9ea7]">
      <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {' '}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.7598 0.205025L0.305025 4.6598C0.0316582 4.93317 0.0316582 5.37638 0.305025 5.64975L4.7598 10.1045C5.03316 10.3779 5.47638 10.3779 5.74975 10.1045C6.02311 9.83115 6.02311 9.38794 5.74975 9.11457L2.48995 5.85477H10.8C11.1866 5.85477 11.5 5.54137 11.5 5.15477C11.5 4.76817 11.1866 4.45477 10.8 4.45477H2.48995L5.74975 1.19497C6.02311 0.921608 6.02311 0.478393 5.74975 0.205025C5.47638 -0.0683417 5.03316 -0.0683417 4.7598 0.205025Z"
        ></path>
      </svg>
    </i>
    {/* <ChevronLeft className="h-4 w-4" />
    <span>Previous</span> */}
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn('gap-1 pr-2.5', className)} {...props}>
    <i className="text-[#9e9ea7]">
      <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {' '}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.2402 0.205025L11.695 4.6598C11.9683 4.93317 11.9683 5.37638 11.695 5.64975L7.2402 10.1045C6.96684 10.3779 6.52362 10.3779 6.25025 10.1045C5.97689 9.83115 5.97689 9.38794 6.25025 9.11457L9.51005 5.85477H1.2C0.813401 5.85477 0.5 5.54137 0.5 5.15477C0.5 4.76817 0.813401 4.45477 1.2 4.45477H9.51005L6.25025 1.19497C5.97689 0.921608 5.97689 0.478393 6.25025 0.205025C6.52362 -0.0683417 6.96684 -0.0683417 7.2402 0.205025Z"
        ></path>
      </svg>
    </i>
    {/* <span>Next</span>
    <ChevronRight className="h-4 w-4" /> */}
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
