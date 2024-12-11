import { FaChevronRight } from 'react-icons/fa';

import './Breadcrumbs.css';

type Link = {
  display: string;
  url: string;
};

interface BreadcrumbsProps {
  links: Link[];
}

export default function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumbs" className="pl-6 pt-4 pb-4">
      <ul className="flex items-center">
        {links.map((link, index) => {
          return (
            <div key={link.url} className="flex items-center">
              <li className={`mr-3 ${index !== 0 && 'ml-3'}`}>
                {links.indexOf(link) === links.length - 1 ? (
                  <a
                    href={link.url}
                    aria-current="page"
                    className="text-sm font-semibold hover:underline"
                  >
                    {link.display}
                  </a>
                ) : (
                  <a
                    href={link.url}
                    className="text-sm text-primary-500 hover:underline"
                  >
                    {link.display}
                  </a>
                )}
              </li>
              {links.indexOf(link) !== links.length - 1 && (
                <FaChevronRight size="xs" />
              )}
            </div>
          );
        })}
      </ul>
    </nav>
  );
}
