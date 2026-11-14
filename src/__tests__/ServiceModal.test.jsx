import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServiceModal from '../components/ServiceModal';
import useAppStore from '../store/useAppStore';

const mockService = {
  slug: 'ai-marketing',
  icon: '🤖',
  title: 'Chiến Dịch AI',
  subtitle: 'Mô tả dịch vụ test',
  tags: ['Tag A', 'Tag B'],
  blocks: [
    { type: 'text', content: 'Nội dung text test' },
    { type: 'heading', content: 'Tiêu đề test' },
    { type: 'image', url: 'https://example.com/img.jpg' },
    { type: 'image-grid', images: ['https://example.com/1.jpg', 'https://example.com/2.jpg'] },
    { type: 'video', url: 'https://www.youtube.com/embed/test123' },
  ],
};

beforeEach(() => {
  useAppStore.setState({
    globalServiceModalOpen: false,
    globalSelectedService: null,
  });
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
});

describe('ServiceModal — visibility', () => {
  it('không render gì khi isOpen=false', () => {
    render(<ServiceModal isOpen={false} service={mockService} onClose={() => {}} />);
    expect(screen.queryByText('Chiến Dịch AI')).toBeNull();
  });

  it('render title, subtitle và tags khi isOpen=true', () => {
    render(<ServiceModal isOpen={true} service={mockService} onClose={() => {}} />);
    expect(screen.getByText('Chiến Dịch AI')).toBeInTheDocument();
    expect(screen.getByText('Mô tả dịch vụ test')).toBeInTheDocument();
    expect(screen.getByText('Tag A')).toBeInTheDocument();
    expect(screen.getByText('Tag B')).toBeInTheDocument();
  });
});

describe('ServiceModal — block rendering', () => {
  it('render text block', () => {
    render(<ServiceModal isOpen={true} service={mockService} onClose={() => {}} />);
    expect(screen.getByText('Nội dung text test')).toBeInTheDocument();
  });

  it('render heading block', () => {
    render(<ServiceModal isOpen={true} service={mockService} onClose={() => {}} />);
    expect(screen.getByText('Tiêu đề test')).toBeInTheDocument();
  });

  it('render image block với src đúng', () => {
    render(<ServiceModal isOpen={true} service={mockService} onClose={() => {}} />);
    const images = screen.getAllByRole('img');
    const urls = images.map((img) => img.getAttribute('src'));
    expect(urls).toContain('https://example.com/img.jpg');
  });

  it('render image-grid với đúng số lượng ảnh', () => {
    render(<ServiceModal isOpen={true} service={mockService} onClose={() => {}} />);
    const images = screen.getAllByRole('img');
    const gridUrls = ['https://example.com/1.jpg', 'https://example.com/2.jpg'];
    const srcs = images.map((img) => img.getAttribute('src'));
    gridUrls.forEach((url) => expect(srcs).toContain(url));
  });

  it('render video block dạng thumbnail, chỉ tải iframe sau khi bấm phát', async () => {
    const user = userEvent.setup();
    render(<ServiceModal isOpen={true} service={mockService} onClose={() => {}} />);
    expect(document.querySelector('iframe')).toBeNull();

    await user.click(screen.getByRole('button', { name: 'Phát video' }));

    const iframe = document.querySelector('iframe');
    expect(iframe).not.toBeNull();
    expect(iframe.getAttribute('src')).toBe('https://www.youtube.com/embed/test123?autoplay=1');
  });
});

describe('ServiceModal — scroll lock', () => {
  it('lock body scroll khi modal mở', () => {
    render(<ServiceModal isOpen={true} service={mockService} onClose={() => {}} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('unlock body scroll khi modal đóng', () => {
    const { rerender } = render(
      <ServiceModal isOpen={true} service={mockService} onClose={() => {}} />
    );
    expect(document.body.style.overflow).toBe('hidden');
    rerender(<ServiceModal isOpen={false} service={mockService} onClose={() => {}} />);
    expect(document.body.style.overflow).toBe('');
  });
});

describe('ServiceModal — interaction', () => {
  it('gọi onClose khi click overlay', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<ServiceModal isOpen={true} service={mockService} onClose={onClose} />);
    const backdrop = document.querySelector('[class*="backdrop"]');
    await user.click(backdrop);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('không gọi onClose khi click bên trong modal body', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<ServiceModal isOpen={true} service={mockService} onClose={onClose} />);
    const title = screen.getByText('Chiến Dịch AI');
    await user.click(title);
    expect(onClose).not.toHaveBeenCalled();
  });
});

describe('ServiceModal — edge cases', () => {
  it('return null khi service=null với isOpen=true', () => {
    const { container } = render(
      <ServiceModal isOpen={true} service={null} onClose={() => {}} />
    );
    expect(container.firstChild).toBeNull();
  });
});
