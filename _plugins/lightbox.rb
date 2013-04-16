module Jekyll
  class LightBox < Liquid::Tag
    def initialize(tag_name, filename, tokens)
      super
      @image_name = filename.strip
    end

    def render(context)
      return "<div class='imageBox' id='right'><a rel='lightbox' title='#{title}' href='#{@image_url}'>#{image_url}</a></div>"
    end

    def image_tag
      "<img src='#{thumb_url}' title='#{title}' alt='#{alt}' />"
    end

    def thumb_url
      "/images/#{@image_name}-thumb#{@image_ext}"
    end
    def image_url
      "/images/#{@image_name}.#{@image_ext}"
    end

    def link_url
      @link
    end

    def title
      @title || @image_name
    end

    def alt
      @alt || title
    end
    Liquid::Template.register_tag  'lightbox', self
  end
end