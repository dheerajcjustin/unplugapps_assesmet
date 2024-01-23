// icon:new-section | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconNewSection(props: React.SVGProps<SVGSVGElement>) {
      return (
            <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  {...props}
            >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 12h6M12 9v6M4 6V5a1 1 0 011-1h1m5 0h2m5 0h1a1 1 0 011 1v1m0 5v2m0 5v1a1 1 0 01-1 1h-1m-5 0h-2m-5 0H5a1 1 0 01-1-1v-1m0-5v-2m0-5" />
            </svg>
      );
}

export default IconNewSection;
