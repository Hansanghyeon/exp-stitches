import _ from 'lodash'
import { createTheme, styled } from '../stitches.config';

const Box = styled('div', {})

const Ribbon = styled('div', {
  display: 'flex',
  jc: 'flex-start',
  '& > *': {
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    display: 'flex',
  },
  '& > * > *': {
    w: '48px',
    h: '32px',
  },
})

export type ColorDataType = {
  token: string;
  role: string | JSX.Element;
  value: string | JSX.Element;
  example: JSX.Element;
}

class colorDataTemplate {
  token: string;
  role: string | JSX.Element;
  value: string | JSX.Element;
  example: JSX.Element;

  constructor(token: string, role: string | JSX.Element, value: string | JSX.Element) {
    this.token = token;
    this.role = role;
    this.value = value;
    this.example = <Ribbon>
      <div>
        <Box css={{ bg: `$${this.token}` }} />
        <div style={{ backgroundColor: '#fff'}}>
          <Box css={{ bg: `$${this.token}`, height: '100%' }} />
        </div>
      </div>
    </Ribbon>;
  }
}

export const colorData = [
  new colorDataTemplate(
    'red-500',
    <>
      default text<br />
      label
    </>,
    <>
      🌝 slate-900<br />
      🌚 white
    </>
  ),
]
