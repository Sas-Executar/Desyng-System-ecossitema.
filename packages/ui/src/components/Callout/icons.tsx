/**
 * Minimal built-in icon set for Callout, keyed by the same names used in
 * @executar/callout-protocol's CALLOUT_REGISTRY (Info, Lightbulb, CircleCheck,
 * TriangleAlert, ShieldAlert, CircleHelp, BookOpen, FileText).
 *
 * These are deliberately simple custom shapes, NOT the actual Lucide icon
 * set — the registry's icon *names* are an INFERRED match to Lucide
 * (design-system/00_GOVERNANCE/DS-FORM-001_RESPONSES.csv, ICO-002), not a
 * confirmed dependency. Swap this file's contents for real `lucide-react`
 * imports once that's confirmed, without touching Callout.tsx or the
 * registry — that's the point of keying by name here.
 */
import type { SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

function base(children: JSX.Element, props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} width="1em" height="1em" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

const Info: IconComponent = (p) =>
  base(
    <>
      <circle cx="10" cy="10" r="7.5" />
      <line x1="10" y1="9" x2="10" y2="14" />
      <circle cx="10" cy="6.2" r="0.9" fill="currentColor" stroke="none" />
    </>,
    p
  );

const Lightbulb: IconComponent = (p) =>
  base(
    <>
      <path d="M7 15h6M8 17.5h4" />
      <path d="M10 2.5a5.5 5.5 0 0 0-3 10.1c.6.4 1 1.1 1 1.9h4c0-.8.4-1.5 1-1.9A5.5 5.5 0 0 0 10 2.5Z" />
    </>,
    p
  );

const CircleCheck: IconComponent = (p) =>
  base(
    <>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M6.8 10.2l2.1 2.1 4.3-4.6" />
    </>,
    p
  );

const TriangleAlert: IconComponent = (p) =>
  base(
    <>
      <path d="M10 3.2 17.5 16H2.5L10 3.2Z" />
      <line x1="10" y1="8.3" x2="10" y2="12" />
      <circle cx="10" cy="14.2" r="0.9" fill="currentColor" stroke="none" />
    </>,
    p
  );

const ShieldAlert: IconComponent = (p) =>
  base(
    <>
      <path d="M10 2.5 16.5 5v5.2c0 4-2.8 6.6-6.5 7.3-3.7-.7-6.5-3.3-6.5-7.3V5L10 2.5Z" />
      <line x1="10" y1="7" x2="10" y2="10.8" />
      <circle cx="10" cy="13" r="0.9" fill="currentColor" stroke="none" />
    </>,
    p
  );

const CircleHelp: IconComponent = (p) =>
  base(
    <>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M7.8 8a2.2 2.2 0 1 1 3.3 1.9c-.7.4-1.1.9-1.1 1.7" />
      <circle cx="10" cy="14" r="0.9" fill="currentColor" stroke="none" />
    </>,
    p
  );

const BookOpen: IconComponent = (p) =>
  base(
    <>
      <path d="M10 5.5c-1.3-1-3-1.5-5.5-1.5v10c2.5 0 4.2.5 5.5 1.5 1.3-1 3-1.5 5.5-1.5V4c-2.5 0-4.2.5-5.5 1.5Z" />
      <line x1="10" y1="5.5" x2="10" y2="15.5" />
    </>,
    p
  );

const FileText: IconComponent = (p) =>
  base(
    <>
      <path d="M6 2.5h6l3 3v11.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-13.5a1 1 0 0 1 1-1Z" />
      <path d="M7.5 9h5M7.5 12h5M7.5 15h3" />
    </>,
    p
  );

export const CALLOUT_ICONS: Record<string, IconComponent> = {
  Info,
  Lightbulb,
  CircleCheck,
  TriangleAlert,
  ShieldAlert,
  CircleHelp,
  BookOpen,
  FileText,
};
