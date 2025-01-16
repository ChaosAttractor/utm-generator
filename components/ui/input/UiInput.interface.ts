export interface UiInputProps {
  value?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
}

export interface UiInputEmits {
  input: [value: string];
}
