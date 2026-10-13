import { CodeHighlightDefaultLanguage } from '@mantine/code-highlight';
import { AccordionSections } from './AccordionSections/AccordionSections';
import AccordionSectionsCode from './AccordionSections/code.json';
import { AutosaveLocalStorage } from './AutosaveLocalStorage/AutosaveLocalStorage';
import AutosaveLocalStorageCode from './AutosaveLocalStorage/code.json';
import { AutosaveServer } from './AutosaveServer/AutosaveServer';
import AutosaveServerCode from './AutosaveServer/code.json';
import ConditionalSectionsCode from './ConditionalSections/code.json';
import { ConditionalSections } from './ConditionalSections/ConditionalSections';
import ConditionalValidationCode from './ConditionalValidation/code.json';
import { ConditionalValidation } from './ConditionalValidation/ConditionalValidation';
import ContactFormCode from './ContactForm/code.json';
import { ContactForm } from './ContactForm/ContactForm';
import CustomInputSubscriptionCode from './CustomInputSubscription/code.json';
import { CustomInputSubscription } from './CustomInputSubscription/CustomInputSubscription';
import DateRangeCode from './DateRange/code.json';
import { DateRange } from './DateRange/DateRange';
import DependentSelectsCode from './DependentSelects/code.json';
import { DependentSelects } from './DependentSelects/DependentSelects';
import DirtyFieldsCode from './DirtyFields/code.json';
import { DirtyFields } from './DirtyFields/DirtyFields';
import EditableTableCode from './EditableTable/code.json';
import { EditableTable } from './EditableTable/EditableTable';
import EditRecordCode from './EditRecord/code.json';
import { EditRecord } from './EditRecord/EditRecord';
import FileUploadCode from './FileUpload/code.json';
import { FileUpload } from './FileUpload/FileUpload';
import FiltersFormCode from './FiltersForm/code.json';
import { FiltersForm } from './FiltersForm/FiltersForm';
import FormActionsCode from './FormActions/code.json';
import { FormActions } from './FormActions/FormActions';
import FormContextSplitCode from './FormContextSplit/code.json';
import { FormContextSplit } from './FormContextSplit/FormContextSplit';
import FormInModalCode from './FormInModal/code.json';
import { FormInModal } from './FormInModal/FormInModal';
import GeneratedSlugCode from './GeneratedSlug/code.json';
import { GeneratedSlug } from './GeneratedSlug/GeneratedSlug';
import InvoiceItemsCode from './InvoiceItems/code.json';
import { InvoiceItems } from './InvoiceItems/InvoiceItems';
import JobApplicationCode from './JobApplication/code.json';
import { JobApplication } from './JobApplication/JobApplication';
import LargeFormCode from './LargeForm/code.json';
import { LargeForm } from './LargeForm/LargeForm';
import ListMinimumCode from './ListMinimum/code.json';
import { ListMinimum } from './ListMinimum/ListMinimum';
import LoginFormCode from './LoginForm/code.json';
import { LoginForm } from './LoginForm/LoginForm';
import NestedAddressesCode from './NestedAddresses/code.json';
import { NestedAddresses } from './NestedAddresses/NestedAddresses';
import OrderTotalCode from './OrderTotal/code.json';
import { OrderTotal } from './OrderTotal/OrderTotal';
import OtpFormCode from './OtpForm/code.json';
import { OtpForm } from './OtpForm/OtpForm';
import QuestionnaireBuilderCode from './QuestionnaireBuilder/code.json';
import { QuestionnaireBuilder } from './QuestionnaireBuilder/QuestionnaireBuilder';
import RegistrationFormCode from './RegistrationForm/code.json';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import RenderCountCode from './RenderCount/code.json';
import { RenderCount } from './RenderCount/RenderCount';
import ReorderListItemsCode from './ReorderListItems/code.json';
import { ReorderListItems } from './ReorderListItems/ReorderListItems';
import ReusableFieldsCode from './ReusableFields/code.json';
import { ReusableFields } from './ReusableFields/ReusableFields';
import ReusableFieldsAcrossFormsCode from './ReusableFieldsAcrossForms/code.json';
import { ReusableFieldsAcrossForms } from './ReusableFieldsAcrossForms/ReusableFieldsAcrossForms';
import RichTextFormCode from './RichTextForm/code.json';
import { RichTextForm } from './RichTextForm/RichTextForm';
import SameAsBillingCode from './SameAsBilling/code.json';
import { SameAsBilling } from './SameAsBilling/SameAsBilling';
import SelectAllCode from './SelectAll/code.json';
import { SelectAll } from './SelectAll/SelectAll';
import ServerErrorsCode from './ServerErrors/code.json';
import { ServerErrors } from './ServerErrors/ServerErrors';
import SettingsSaveBarCode from './SettingsSaveBar/code.json';
import { SettingsSaveBar } from './SettingsSaveBar/SettingsSaveBar';
import StepperWizardCode from './StepperWizard/code.json';
import { StepperWizard } from './StepperWizard/StepperWizard';
import SubmitWithTransformCode from './SubmitWithTransform/code.json';
import { SubmitWithTransform } from './SubmitWithTransform/SubmitWithTransform';
import SubscribeInputCode from './SubscribeInput/code.json';
import { SubscribeInput } from './SubscribeInput/SubscribeInput';
import TabsWithErrorCountCode from './TabsWithErrorCount/code.json';
import { TabsWithErrorCount } from './TabsWithErrorCount/TabsWithErrorCount';
import TypedFormCode from './TypedForm/code.json';
import { TypedForm } from './TypedForm/TypedForm';
import UnitConverterCode from './UnitConverter/code.json';
import { UnitConverter } from './UnitConverter/UnitConverter';
import UnsavedChangesPromptCode from './UnsavedChangesPrompt/code.json';
import { UnsavedChangesPrompt } from './UnsavedChangesPrompt/UnsavedChangesPrompt';
import UsernameAvailabilityCode from './UsernameAvailability/code.json';
import { UsernameAvailability } from './UsernameAvailability/UsernameAvailability';
import ValidateOnBlurCode from './ValidateOnBlur/code.json';
import { ValidateOnBlur } from './ValidateOnBlur/ValidateOnBlur';
import ZodAsyncSchemaCode from './ZodAsyncSchema/code.json';
import { ZodAsyncSchema } from './ZodAsyncSchema/ZodAsyncSchema';
import ZodSchemaCode from './ZodSchema/code.json';
import { ZodSchema } from './ZodSchema/ZodSchema';

interface ExampleCode {
  fileName: string;
  language: CodeHighlightDefaultLanguage;
  code: string;
}

interface FormExampleComponent {
  component: React.FC;
  code: ExampleCode[];
}

function example(
  component: React.FC,
  code: { fileName: string; language: string; code: string }[]
) {
  return { component, code: code as ExampleCode[] } satisfies FormExampleComponent;
}

export const FORM_EXAMPLES_COMPONENTS = {
  LoginForm: example(LoginForm, LoginFormCode),
  RegistrationForm: example(RegistrationForm, RegistrationFormCode),
  ContactForm: example(ContactForm, ContactFormCode),
  FiltersForm: example(FiltersForm, FiltersFormCode),
  SubscribeInput: example(SubscribeInput, SubscribeInputCode),
  OtpForm: example(OtpForm, OtpFormCode),
  UsernameAvailability: example(UsernameAvailability, UsernameAvailabilityCode),
  ValidateOnBlur: example(ValidateOnBlur, ValidateOnBlurCode),
  DateRange: example(DateRange, DateRangeCode),
  ZodSchema: example(ZodSchema, ZodSchemaCode),
  ZodAsyncSchema: example(ZodAsyncSchema, ZodAsyncSchemaCode),
  ServerErrors: example(ServerErrors, ServerErrorsCode),
  ConditionalValidation: example(ConditionalValidation, ConditionalValidationCode),
  ListMinimum: example(ListMinimum, ListMinimumCode),
  JobApplication: example(JobApplication, JobApplicationCode),
  GeneratedSlug: example(GeneratedSlug, GeneratedSlugCode),
  DependentSelects: example(DependentSelects, DependentSelectsCode),
  OrderTotal: example(OrderTotal, OrderTotalCode),
  SameAsBilling: example(SameAsBilling, SameAsBillingCode),
  UnitConverter: example(UnitConverter, UnitConverterCode),
  ConditionalSections: example(ConditionalSections, ConditionalSectionsCode),
  SelectAll: example(SelectAll, SelectAllCode),
  InvoiceItems: example(InvoiceItems, InvoiceItemsCode),
  ReorderListItems: example(ReorderListItems, ReorderListItemsCode),
  NestedAddresses: example(NestedAddresses, NestedAddressesCode),
  EditableTable: example(EditableTable, EditableTableCode),
  QuestionnaireBuilder: example(QuestionnaireBuilder, QuestionnaireBuilderCode),
  StepperWizard: example(StepperWizard, StepperWizardCode),
  FormInModal: example(FormInModal, FormInModalCode),
  TabsWithErrorCount: example(TabsWithErrorCount, TabsWithErrorCountCode),
  SettingsSaveBar: example(SettingsSaveBar, SettingsSaveBarCode),
  DirtyFields: example(DirtyFields, DirtyFieldsCode),
  AccordionSections: example(AccordionSections, AccordionSectionsCode),
  EditRecord: example(EditRecord, EditRecordCode),
  AutosaveLocalStorage: example(AutosaveLocalStorage, AutosaveLocalStorageCode),
  AutosaveServer: example(AutosaveServer, AutosaveServerCode),
  UnsavedChangesPrompt: example(UnsavedChangesPrompt, UnsavedChangesPromptCode),
  FileUpload: example(FileUpload, FileUploadCode),
  SubmitWithTransform: example(SubmitWithTransform, SubmitWithTransformCode),
  RenderCount: example(RenderCount, RenderCountCode),
  LargeForm: example(LargeForm, LargeFormCode),
  CustomInputSubscription: example(CustomInputSubscription, CustomInputSubscriptionCode),
  FormContextSplit: example(FormContextSplit, FormContextSplitCode),
  ReusableFields: example(ReusableFields, ReusableFieldsCode),
  ReusableFieldsAcrossForms: example(ReusableFieldsAcrossForms, ReusableFieldsAcrossFormsCode),
  FormActions: example(FormActions, FormActionsCode),
  TypedForm: example(TypedForm, TypedFormCode),
  RichTextForm: example(RichTextForm, RichTextFormCode),
};

export type FormExampleId = keyof typeof FORM_EXAMPLES_COMPONENTS;
