import Files from "./../../components/Files/Files";
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import Enzyme, { shallow, mount} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });

describe('With React Testing Library', () => {
    it('Render Files', () => {
        const { getByTestId } = render(<Files />);
        expect(getByTestId('files-root')).toBeInTheDocument()
    });

    // it('Set value to login input', () => {
    //     const { container } = render(<Login />);
    //     const input = container.querySelector(`#login-input`);
    //     fireEvent.change(input, {
    //         target: { value: 'username' }
    //     })
    //     expect(input.value).toMatch(/username/i);
    // });

    // it('Login must prelouder have after click btn ', () => {
    //     const { container } = render(<Login />);
    //     const btn = container.querySelector(`#login-btn-custom-test`);
    //     const prelouder = container.querySelector(`.prelouder`);
    //     fireEvent.click(btn)
    //     expect(prelouder.classList.contains('active')).toBe(true)
    // });
}); 