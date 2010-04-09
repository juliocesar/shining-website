use Rack::Static, :root => 'public', :urls => ['/styles', '/js']
run lambda { |env| 
  [200, { 'Content-Type' => 'text/html', 'Cache-Control' => 'public, max-age=86400' }, [File.read('public/index.html')]] 
}
