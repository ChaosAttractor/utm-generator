export interface GeneratorConfigInterface {
  key: string;
  label?: string;
  placeholder?: string;
  class?: string;
}

export default (): GeneratorConfigInterface[] => {
  const { t } = useI18n();

  return [
    {
      class: 'md:col-span-2',
      placeholder: 'https://example.com',
      label: t('generator.url'),
      key: 'url',
    },
    {
      placeholder: 'google',
      label: 'utm_source',
      key: 'utm_source',
    },
    {
      placeholder: 'banner',
      label: 'utm_medium',
      key: 'utm_medium',
    },
    {
      placeholder: 'promo',
      label: 'utm_campaign',
      key: 'utm_campaign',
    },
    {
      placeholder: 'link',
      label: 'utm_content',
      key: 'utm_content',
    },
    {
      placeholder: 'new',
      label: 'utm_term',
      key: 'utm_term',
    },
  ];
};
