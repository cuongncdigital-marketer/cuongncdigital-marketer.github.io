import { describe, it, expect, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { resolveRoute } from '../routes';
import useRoute from '../hooks/useRoute';

afterEach(() => {
    window.history.replaceState(null, '', '/');
});

describe('resolveRoute', () => {
    it('trang chủ không khớp route nào', () => {
        expect(resolveRoute({ pathname: '/', hash: '' })).toBeNull();
    });

    it('khớp /about theo pathname', () => {
        expect(resolveRoute({ pathname: '/about', hash: '' })?.key).toBe('about');
    });

    it('khớp #about theo hash', () => {
        expect(resolveRoute({ pathname: '/', hash: '#about' })?.key).toBe('about');
    });

    it('khớp #/about và #about/con', () => {
        expect(resolveRoute({ pathname: '/', hash: '#/about' })?.key).toBe('about');
        expect(resolveRoute({ pathname: '/', hash: '#about/abc' })?.key).toBe('about');
    });

    it('không khớp nhầm hash khác như #contact hay #aboutus', () => {
        expect(resolveRoute({ pathname: '/', hash: '#contact' })).toBeNull();
        expect(resolveRoute({ pathname: '/', hash: '#aboutus' })).toBeNull();
    });
});

describe('useRoute', () => {
    it('đổi route khi hash thay đổi và quay lại khi bỏ hash', () => {
        const { result } = renderHook(() => useRoute());
        expect(result.current).toBeNull();

        act(() => {
            window.location.hash = '#about';
            window.dispatchEvent(new HashChangeEvent('hashchange'));
        });
        expect(result.current?.key).toBe('about');

        act(() => {
            window.history.replaceState(null, '', '/');
            window.dispatchEvent(new HashChangeEvent('hashchange'));
        });
        expect(result.current).toBeNull();
    });
});
