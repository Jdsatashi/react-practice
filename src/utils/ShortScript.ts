function FirstUpcase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function RegExpInclude(charTypes: string[]): RegExp {
  const regexMap: Record<string, string> = {
    word: 'A-Za-z',
    word_lower: 'a-z',
    word_upcase: 'A-Z',
    number: '\\d',
    _: '_',
    '@': '@',
    '#': '#',
    $: '\\$',
    '%': '%',
    '^': '\\^',
    '&': '&',
    '*': '\\*',
    '(': '\\(',
    ')': '\\)',
    '-': '-',
    '+': '\\+',
    '=': '=',
    '{': '\\{',
    '}': '\\}',
    '[': '\\[',
    ']': '\\]',
    '|': '\\|',
    '\\': '\\\\',
    ':': ':',
    ';': ';',
    '"': '\\"',
    "'": "\\'",
    '<': '<',
    '>': '>',
    ',': ',',
    '.': '\\.',
    '/': '\\/',
    '?': '\\?',
    '!': '!',
    '~': '~',
    '`': '`',
  };

  const regexPattern = charTypes
    .map((charType) => {
      const regexPart = regexMap[charType];
      if (!regexPart) {
        throw new Error(`Invalid character type: ${charType}`);
      }
      return regexPart;
    })
    .join('');

  return new RegExp(`^[A-Za-z][${regexPattern}]*$`);
}

export { FirstUpcase, RegExpInclude };
