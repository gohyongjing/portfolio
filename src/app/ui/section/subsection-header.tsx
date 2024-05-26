'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

type SubsectionHeaderProps = {
  heading?: React.ReactNode
  expandable?: boolean
  id?: string
}

export default function SubsectionHeader({
  heading = '',
  expandable = false,
  id = ''
}: SubsectionHeaderProps) {
  const pathName = usePathname();
  const params = useSearchParams();
  const expanded = params.get('expanded') === id ?? false;
  const { replace } = useRouter();

  function handleExpandSection() {
    if (!expandable) {
      return;
    }
    const newParams = new URLSearchParams(params);
    if (newParams.has('expanded', id)) {
      newParams.delete('expanded', id);
    } else {
      newParams.set('expanded', id);
    }
    
    replace(`${pathName}?${newParams.toString()}`, {scroll: false});
  }

  return <div
    className="flex items-center gap-2 group"
    onClick={handleExpandSection}
  >
    {
      expandable
        ? expanded
          ? <ChevronDownIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 cursor-pointer"/>
          : <ChevronRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 cursor-pointer"/>
        : <span className="w-6"></span>
    }
    <h2 className={`w-full my-1 text-2xl group-hover:opacity-100 ${expandable ? 'cursor-pointer group-hover:underline' : ''}`}>
      {heading}
    </h2>
  </div>;
}