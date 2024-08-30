import React from "react";

// Existing Icons...

export const ComputerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
    <rect x="6" y="7" width="12" height="12" rx="2" ry="2" />
    <line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);

export const DollarSignIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Previous Icon
export const PrevIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

// Next Icon
export const NextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// Social Media Icons
export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.706h-3.205v-3.58h3.205V8.301c0-3.18 1.944-4.911 4.782-4.911 1.359 0 2.527.1 2.866.146v3.321h-1.966c-1.542 0-1.84.733-1.84 1.808v2.369h3.68l-.48 3.58h-3.2V24h6.275C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
);

export const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.935 4.935 0 0 0 23.337 3.3a9.86 9.86 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.616.926c-2.717 0-4.92 2.203-4.92 4.92 0 .386.044.763.127 1.124C7.728 6.818 4.1 5.128 1.671 2.149A4.902 4.902 0 0 0 1 4.87a4.92 4.92 0 0 0 2.188 4.1 4.902 4.902 0 0 1-2.23-.616v.062c0 2.386 1.696 4.375 3.946 4.827a4.92 4.92 0 0 1-2.224.084 4.925 4.925 0 0 0 4.6 3.417A9.869 9.869 0 0 1 .589 19.13a13.93 13.93 0 0 0 7.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24H22.23C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0zM7.12 20.451H3.56V8.904h3.56v11.547zM5.34 7.594c-1.14 0-2.06-.93-2.06-2.061 0-1.14.93-2.06 2.06-2.06 1.14 0 2.06.93 2.06 2.06 0 1.14-.93 2.061-2.06 2.061zM20.45 20.451h-3.56V14.77c0-1.353-.027-3.091-1.883-3.091-1.883 0-2.173 1.472-2.173 2.994v5.779h-3.56V8.904h3.42v1.573h.049c.477-.9 1.639-1.848 3.372-1.848 3.6 0 4.27 2.368 4.27 5.446v6.376z" />
  </svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.26 0-3.667.013-4.947.072-1.281.059-2.156.27-2.913.574a6.78 6.78 0 0 0-2.462 1.442 6.78 6.78 0 0 0-1.442 2.462c-.304.757-.515 1.632-.574 2.913-.059 1.28-.072 1.687-.072 4.947s.013 3.667.072 4.947c.059 1.281.27 2.156.574 2.913a6.78 6.78 0 0 0 1.442 2.462 6.78 6.78 0 0 0 2.462 1.442c.757.304 1.632.515 2.913.574 1.28.059 1.687.072 4.947.072s3.667-.013 4.947-.072c1.281-.059 2.156-.27 2.913-.574a6.78 6.78 0 0 0 2.462-1.442 6.78 6.78 0 0 0 1.442-2.462c.304-.757.515-1.632.574-2.913.059-1.28.072-1.687.072-4.947s-.013-3.667-.072-4.947c-.059-1.281-.27-2.156-.574-2.913a6.78 6.78 0 0 0-1.442-2.462 6.78 6.78 0 0 0-2.462-1.442c-.757-.304-1.632-.515-2.913-.574-1.28-.059-1.687-.072-4.947-.072zm0 5.838a6.163 6.163 0 0 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.141a3.978 3.978 0 0 1 0-7.956 3.978 3.978 0 0 1 0 7.956zm6.406-11.845a1.44 1.44 0 0 1 1.44-1.44c.796 0 1.44.644 1.44 1.44a1.44 1.44 0 0 1-1.44 1.44 1.44 1.44 0 0 1-1.44-1.44z" />
  </svg>
);

// WhatsApp Icon
export const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12.001 0C5.373 0 0 5.373 0 12c0 2.068.539 4.017 1.481 5.718L0 24l6.414-1.473c1.668.925 3.571 1.46 5.587 1.46 6.627 0 12-5.373 12-12s-5.373-12-12-12zm.001 22c-1.71 0-3.298-.438-4.693-1.203l-.328-.188L4 21l1.349-3.981-.211-.343C3.782 15.379 3.25 13.738 3.25 12c0-4.825 3.925-8.75 8.75-8.75 4.824 0 8.75 3.925 8.75 8.75 0 4.825-3.926 8.75-8.75 8.75z" />
    <path d="M16.316 13.413c-.419-.21-2.48-1.226-2.865-1.367-.385-.141-.665-.21-.946.21-.281.419-1.086 1.367-1.333 1.648-.247.281-.493.316-.911.105-.419-.21-1.768-.65-3.368-2.07-1.243-1.111-2.08-2.484-2.325-2.904-.247-.42-.027-.648.19-.857.194-.193.419-.496.629-.744.211-.247.281-.42.419-.679.141-.281.07-.52-.035-.733-.105-.211-.946-2.296-1.296-3.156-.341-.85-.691-.733-.946-.744-.245-.012-.52-.014-.793-.014-.273 0-.718.106-.943.526-.225.42-.943 1.035-.943 2.53 0 1.495 1.01 2.939 1.15 3.141.14.202 2.002 3.075 4.86 4.316.68.293 1.213.467 1.628.601.684.217 1.31.186 1.805.113.551-.081 1.68-.686 1.92-1.349.237-.664.237-1.233.165-1.349-.071-.117-.263-.189-.682-.399z" />
  </svg>
);

export const HTMLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M4.136 3.012h15.729l-1.431 16.12L11.996 21 4.136 3.012zm5.266 5.44h-2.86l.264 2.helv.625h2.92l-.328 3.426-2.463.675-2.43-.675-.163-1.863h2.11l.102 1.117 1.613.43 1.59-.43.157-1.706h-4.206l-.343-3.599h6.529l.283 2.283h2.854l-.568-5.092H9.402v-.001z" />
  </svg>
);

export const CSSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm14.666 0L12 10.5 5.334 3H4v18h16V3h-.334z" />
  </svg>
);

export const JavaScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.553-.259-1.166-.438-1.351-.854-.185-.417-.214-.685-.095-1.081.229-.514.687-.671 1.242-.5.293.1.563.358.732.768.78-1.019.78-1.019 1.389-1.543-.221-.381-.464-.667-.811-.961-.853-.766-1.989-1.022-2.989-.73-1 .291-1.57.968-1.742 1.692-.175.732-.06 1.278.396 1.776.945 1.086 2.945 1.335 3.316 2.46.359 1.115-.494 1.476-1.122 1.485-.562.01-.879-.087-1.158-.624l-.142-.258c-.574 1.053-.574 1.053-1.2 1.789.216.515.516.858.901 1.067 1.365.706 4.247.656 4.775-1.209.02-.062.046-.132.065-.2l.046.136z" />
  </svg>
);

export const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
  </svg>
);

export const NodeJSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 2.245a10 10 0 0 0-3.205.521 1.002 1.002 0 0 0-.765.765 9.94 9.94 0 0 0-.521 3.205c0 5.477 4.423 9.9 9.9 9.9a9.94 9.94 0 0 0 3.205-.521 1.002 1.002 0 0 0 .765-.765c.283-.972.521-2.063.521-3.205 0-5.477-4.423-9.9-9.9-9.9zm7.331 7.077a.999.999 0 0 0-.944-.681h-1.788a1 1 0 0 0-.944.681l-1.789 4.723-1.789-4.723a1 1 0 0 0-.944-.681h-1.788a.999.999 0 0 0-.944.681l-2.4 6.324a.998.998 0 0 0 .944 1.319h1.788a1 1 0 0 0 .944-.681l1.479-3.896 1.479 3.896a1 1 0 0 0 .944.681h1.788a.999.999 0 0 0 .944-1.319l-2.4-6.324z" />
  </svg>
);

export const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M14.207 14.207a1 1 0 0 0 1.586-1.207L13.5 9l2.293-4a1 1 0 1 0-1.586-1.207L12 7.793 9.793 4.586A1 1 0 0 0 8.207 5.793L10.5 9l-2.293 4a1 1 0 1 0 1.586 1.207L12 10.207l2.207 4z" />
    <path d="M12 3c-2.089 0-3.49.806-4.35 2.035a4.97 4.97 0 0 0-4.244 1.045c-1.058 1.053-1.391 2.422-.991 3.66.4 1.241 1.523 2.16 3.11 2.516l.275.05v4.694c0 2.19 1.789 3.978 3.978 3.978 1.345 0 2.554-.667 3.289-1.673l.447-.671.447.671c.735 1.006 1.944 1.673 3.289 1.673 2.189 0 3.978-1.788 3.978-3.978v-4.694l.275-.05c1.586-.356 2.71-1.275 3.11-2.516.4-1.238.067-2.607-.991-3.66a4.97 4.97 0 0 0-4.244-1.045c-.86-1.229-2.261-2.035-4.35-2.035zm-4.209 9.124a1.978 1.978 0 0 1-1.978-1.978c0-1.093.885-1.978 1.978-1.978 1.093 0 1.978.885 1.978 1.978a1.978 1.978 0 0 1-1.978 1.978zm8.4 0a1.978 1.978 0 0 1-1.978-1.978c0-1.093.885-1.978 1.978-1.978 1.093 0 1.978.885 1.978 1.978a1.978 1.978 0 0 1-1.978 1.978z" />
  </svg>
);

export const PHPIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.07 14.55a.42.42 0 0 1-.22.06.33.33 0 0 1-.18-.05.76.76 0 0 1-.21-.36l-1.26-3.91h-4.34l-1.26 3.91a.75.75 0 0 1-.21.36.26.26 0 0 1-.18.05.4.4 0 0 1-.22-.06c-.07-.04-.1-.1-.1-.17a.56.56 0 0 1 0-.15l3.77-10.09a.6.6 0 0 1 .22-.33.5.5 0 0 1 .54 0 .6.6 0 0 1 .22.33l3.77 10.09a.56.56 0 0 1 0 .15c0 .07-.03.14-.1.17zm-3.79-7.49c-.06-.18-.12-.33-.17-.48-.05.15-.11.3-.17.48L8.9 12.77h4.41l-1.03-3.71z" />
  </svg>
);

export const JavaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M8.001 18.002s-.8 1 2.001 1.001c2.201.001 2.4-.501 2.4-.501s.2-.6-.4-.9a4.6 4.6 0 0 0-1.9-.4c-.6 0-2.1.8-2.1.8zm-.1-3.5s-1 1.1 1.7 1.1c2.7 0 2.9-.8 2.9-.8s.3-.6-.3-1a4.54 4.54 0 0 0-2-.3c-.9.1-2.3 1-2.3 1zm7.2-7.1c1.6 1.8 1 2.8 1 2.8s-1.9-1-3.1-.9c-1.2.1-2.4.8-2.4.8s.4-1.4 2.2-2.4 2.3-.3 2.3-.3zM9.901 6c1.9 2.7-.5 4.1-.5 4.1s.8-1.1-.2-2-1.7-2.1-1.4-2.4c.3-.3 2.2.3 2.1.3zm8.8 3.8c.6.8.4 1.4.4 1.4s-.6-.4-1.4-.3c-.8.1-1.6.4-1.6.4s.4-.7 1.5-1 1.1-.5 1.1-.5zm-9.4 6s1.8.6 1 1.5c-1.1 1.1-2.2.5-2.2.5s.4-.6 1-.8c.6-.2 1.2-.3 1.2-.3zm2.1-6.4s2.6 2.2 1 3.6c-1.7 1.4-2.7.1-2.7.1s.9-.7 1.4-1.3c.5-.6.6-1.9.3-2.4z" />
  </svg>
);

export const BarsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

export const TimesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const FlagSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M3 3h2v18H3V3zm2 0h2l5 6v9h2V9l5 6v9h2V9l5 6v9h2V3h-2v18h-2V9l-5 6V3h-2v18h-2V9l-5 6V3H5z" />
    </svg>
  );
};

export default FlagSVG;
