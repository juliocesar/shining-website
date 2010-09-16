use Rack::Static, :root => File.dirname(__FILE__) + '/public', :urls => %w(/img /css /js /fonts)
run lambda { |env|
  [
    200,
    { 'Content-Type' => 'text/html' },
    [File.read('public/index.html')]
  ]
}
