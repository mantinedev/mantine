import { MDXProvider } from '@mdx-js/react';
import { Demo } from '@mantinex/demo';
import { MdxDataTable } from './MdxDataTable/MdxDataTable';
import { MdxExamplesButton } from './MdxExamplesButton/MdxExamplesButton';
import { MdxInfo } from './MdxInfo/MdxInfo';
import { MdxInstallScript } from './MdxInstallScript/MdxInstallScript';
import { MdxKeyboardEventsTable } from './MdxKeyboardEventsTable/MdxKeyboardEventsTable';
import { MdxLink } from './MdxLink/MdxLink';
import { MdxNpmScript } from './MdxNpmScript/MdxNpmScript';
import { MdxPackagesInstallation } from './MdxPackagesInstallation/MdxPackagesInstallation';
import { MdxPre } from './MdxPre/MdxPre';
import {
  MdxAutoContrast,
  MdxComboboxData,
  MdxComboboxDisclaimer,
  MdxComboboxFiltering,
  MdxComboboxLargeData,
  MdxComboboxProps,
  MdxFlexboxGapSupport,
  MdxGetElementRef,
  MdxGetTemplates,
  MdxGradient,
  MdxInputAccessibility,
  MdxInputFeatures,
  MdxInputSections,
  MdxPolymorphic,
  MdxServerComponentsIncompatible,
  MdxStylesApiSelectors,
  MdxTargetComponent,
  MdxWrapperProps,
} from './MdxSharedContent';
import { MdxTemplatesList } from './MdxTemplatesList/MdxTemplatesList';
import { h } from './MdxTitle/MdxTitle';
import { MdxCode, MdxLi, MdxParagraph, MdxUl } from './MdxTypography/MdxTypography';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Demo,
        GetElementRef: MdxGetElementRef,
        Polymorphic: MdxPolymorphic,
        InputFeatures: MdxInputFeatures,
        InputAccessibility: MdxInputAccessibility,
        FlexboxGapSupport: MdxFlexboxGapSupport,
        Gradient: MdxGradient,
        StylesApiSelectors: MdxStylesApiSelectors,
        DataTable: MdxDataTable,
        TargetComponent: MdxTargetComponent,
        KeyboardEventsTable: MdxKeyboardEventsTable,
        InstallScript: MdxInstallScript,
        PackagesInstallation: MdxPackagesInstallation,
        NpmScript: MdxNpmScript,
        TemplatesList: MdxTemplatesList,
        GetTemplates: MdxGetTemplates,
        ComboboxDisclaimer: MdxComboboxDisclaimer,
        ComboboxData: MdxComboboxData,
        ComboboxLargeData: MdxComboboxLargeData,
        ComboboxFiltering: MdxComboboxFiltering,
        ComboboxProps: MdxComboboxProps,
        ServerComponentsIncompatible: MdxServerComponentsIncompatible,
        ExamplesButton: MdxExamplesButton,
        WrapperProps: MdxWrapperProps,
        InputSections: MdxInputSections,
        AutoContrast: MdxAutoContrast,
        pre: MdxPre,
        h1: h(1),
        h2: h(2),
        h3: h(3),
        h4: h(4),
        h5: h(5),
        h6: h(6),
        a: MdxLink,
        p: MdxParagraph,
        li: MdxLi,
        ul: MdxUl,
        blockquote: MdxInfo,
        code: MdxCode,
      }}
    >
      {children as any}
    </MDXProvider>
  );
}
