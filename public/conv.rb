# A script to improve on Jekyll's default Blogger import 
# (http://import.jekyllrb.com/docs/blogger/). It converts the HTML output from 
# Jekyll's import into Markdown and cleans up as much of it as possible.

FILES_TO_CONVERT_GLOB = "_posts/*.md"
WRAP_LENGTH = 80
TO_REPLACE = {
    /<br \/>/m => "\n",
#    /^<img border="0" \nsrc="(.+?)" \n\/>/ => '{% include figure.html img="\1" %}'
#    /^<img alt="" border="0" \nsrc="(.+?)" \ntitle="(.+?)" \/>/ => '{% figure %}![\2](\1){% endfigure %}'
#    /<a \nhref="(.+?)" \ntarget="_blank">(.+?)<\/a>/ => '[\2](\1)'
#    /^<a \nhref="(.+?)" \ntarget="_blank" imageanchor="1"><img alt="" border="0" \nsrc="(.+?)" \ntitle="(.+?)" \/><\/a>/ => '{% figure caption:"\3 ([larger](\1))" %}![\3](\2){% endfigure %}'
#    /^<a \nhref="(.+?)" \nimageanchor="1" target="_blank"><img alt="" border="0" \nsrc="(.+?)" \ntitle="(.+?)" \/><\/a>/ => '{% figure caption:"\3 ([larger](\1))" %}![\3](\2){% endfigure %}'
    /^<a \nhref="(.+?)" \nimageanchor="1"><img alt="" \nborder="0" \nsrc="(.+?)" \ntitle="(.+?)" width="(.+?)" \n\/><\/a>/ => '{% figure caption:"\3 ([larger](\1))" %}![\3](\2){% endfigure %}'
#    /data-original-height="(.+?)" data-original-width="(.+?)" height="(.+?)" / => '' 
}


def wrap_line(line)
  words = line.split(/ /)
 
  wrapped = words.reduce({:length => 0, :out => ""}) do |accum, word|
    new_word = word + " "
    new_length = accum[:length] + new_word.length
    if (new_length >= WRAP_LENGTH)
      {:length => new_word.length, :out => accum[:out] + "\n" + new_word}
    else
      {:length => new_length, :out => accum[:out] + new_word}
    end
  end

  wrapped[:out]
end

def wrap_text(text)
  lines = text.split("\n")
  front_matter_count = 0
  wrapped_lines = lines.map do |line| 
    if front_matter_count == 2
      wrap_line(line)
    else
      if line == "---"
        front_matter_count += 1
      end
      line
    end
  end
  wrapped_lines.join("\n")
end

files_to_convert = Dir[FILES_TO_CONVERT_GLOB]

files_to_convert.each do |html_file|
  original_contents = IO.read(html_file)

  converted_contents = TO_REPLACE.keys.reduce(original_contents) do |contents, to_replace_key|
    contents.gsub(to_replace_key, TO_REPLACE[to_replace_key])
  end

  wrapped_contents = wrap_text(converted_contents)

  md_file = "#{File.dirname(html_file)}/#{File.basename(html_file, '.*')}.md"
  IO.write(md_file, converted_contents)
  # TODO: remove after debugging
  # puts "md_file = #{md_file}\n\n#{wrapped_contents}"
end