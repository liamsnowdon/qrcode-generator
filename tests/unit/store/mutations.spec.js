import mutations from '@/store/mutations';
import { DEFAULT_VALUE } from '@/constants';

const { setQrValue, setFileType, setQrLightColor, setQrDarkColor } = mutations;

describe('Vuex mutations', () => {
  it('sets qr value', () => {
    const state = { qrValue: DEFAULT_VALUE };

    setQrValue(state, 'Test value');

    expect(state.qrValue).toBe('Test value');
  });

  it('sets file type value', () => {
    const state = { fileType: 'jpeg' };

    setFileType(state, 'png');

    expect(state.fileType).toBe('png');
  });

  it('sets light colour value', () => {
    const state = { qrLightColor: '#ffffff' };

    setQrLightColor(state, '#f5f5f5');

    expect(state.qrLightColor).toBe('#f5f5f5');
  });

  it('sets dark colour value', () => {
    const state = { qrDarkColor: '#000000' };

    setQrDarkColor(state, '#eeeeee');

    expect(state.qrDarkColor).toBe('#eeeeee');
  });
});
