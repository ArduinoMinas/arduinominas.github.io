class Random < Liquid::Tag
  def initialize(tag_name, markup, tokens)
     super
     @rand = markup.to_i
  end

  def render(context)
     rand(@rand)
  end
  
  Liquid::Template.register_tag('random', self)
end
