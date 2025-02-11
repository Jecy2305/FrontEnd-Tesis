import React from "react";

function MoonIcon({color = "#0E1013"}) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3655 1.12433C19.0384 0.291891 17.8624 0.291889 17.5353 1.12433L17.1073 2.21354L16.0227 2.6429C15.1933 2.97121 15.1933 4.14713 16.0227 4.47544L17.1073 4.90481L17.5353 5.99401C17.8624 6.82645 19.0384 6.82646 19.3655 5.99402L19.7935 4.90481L20.8781 4.47544C21.7075 4.14714 21.7075 2.97121 20.8781 2.6429L19.7935 2.21354L19.3655 1.12433ZM18.4504 1.52989L18.8651 2.58533C18.9648 2.83891 19.165 3.04027 19.4188 3.14073L20.4759 3.55917L19.4188 3.97762C19.165 4.07808 18.9648 4.27943 18.8651 4.53301L18.4504 5.58846L18.0357 4.53301C17.936 4.27943 17.7358 4.07808 17.482 3.97762L16.4249 3.55917L17.482 3.14073C17.7358 3.04027 17.936 2.83891 18.0357 2.58533L18.4504 1.52989ZM15.4981 6.94681C15.171 6.11437 13.9951 6.11437 13.668 6.94681L13.5134 7.34008L13.1222 7.49497C12.2928 7.82328 12.2928 8.9992 13.1222 9.32751L13.5134 9.4824L13.668 9.87567C13.9951 10.7081 15.171 10.7081 15.4981 9.87567L15.6526 9.4824L16.0439 9.32751C16.8733 8.9992 16.8733 7.82328 16.0439 7.49497L15.6526 7.34008L15.4981 6.94681ZM14.583 7.35237L14.7243 7.71188C14.824 7.96545 15.0242 8.16681 15.278 8.26727L15.6417 8.41124L15.278 8.55521C15.0242 8.65567 14.824 8.85703 14.7243 9.1106L14.583 9.47011L14.4418 9.1106C14.3421 8.85703 14.1419 8.65567 13.8881 8.55521L13.5244 8.41124L13.8881 8.26727C14.1419 8.16681 14.3421 7.96545 14.4418 7.71188L14.583 7.35237Z"
        fill="#1C274C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0174 1.80157C5.37072 2.29221 1.75 6.22328 1.75 11C1.75 16.1086 5.89137 20.25 11 20.25C15.7767 20.25 19.7078 16.6293 20.1984 11.9826C18.8717 13.6669 16.8126 14.75 14.5 14.75C10.4959 14.75 7.25 11.5041 7.25 7.5C7.25 5.18738 8.33315 3.1283 10.0174 1.80157ZM0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C11.7166 0.25 12.0754 0.821258 12.1368 1.27627C12.196 1.71398 12.0342 2.27065 11.531 2.57467C9.86266 3.5828 8.75 5.41182 8.75 7.5C8.75 10.6756 11.3244 13.25 14.5 13.25C16.5882 13.25 18.4172 12.1373 19.4253 10.469C19.7293 9.96584 20.286 9.80404 20.7237 9.86316C21.1787 9.92461 21.75 10.2834 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11Z"
        fill={color}
      />
    </svg>
  );
}

export default MoonIcon;
