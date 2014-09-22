# class SlideyPages
#   constructor: ->
#     @currentLevel = @getLevel(document.location.pathname)
#     @binders()

#   binders: ->
#     $('body').on('click', '[data-slidey]', @onLinkClicked)
#     History.Adapter.bind(window, 'statechange', @onStateChanged)

#   getLevel: (url) -> return url.split('/').length - 1 || null

#   onLinkClicked: (e) =>
#     e.preventDefault()

#     href  = $(e.currentTarget).attr('href')
#     title = $(e.currentTarget).data('title')
#     level = @getLevel(href)

#     $.get(href)
#       .done((data) ->
#         content = $(data).find('#content').html()

#         History.pushState({ content: content, level: level }, title, href)
#       )
#       .fail(->
#         console.error 'failed :/'
#       )

#   onStateChanged: =>
#     state   = History.getState()
#     level   = state.data.level
#     content = state.data.content
#     # History.log('statechange:', state.data, state.title, state.url)

#     if level is @currentLevel
#       @slideySibling(content)
#     if level < @currentLevel
#       @slideyBackwards(content)
#     if level > @currentLevel
#       @slideyForwards(content)

#     @currentLevel = level

#   slideySibling: (content) =>
#     $newContent = $(content).css
#       opacity: 0
#       position: 'absolute'
#     $oldContent = $('#content .section-wrap:first')

#     $('#content').prepend($newContent)

#     newContentHeight = $newContent.outerHeight()

#     $newContent.velocity({ translateY: -newContentHeight }, 0, ->
#       $newContent.velocity({ translateY: 0, opacity: 1 }, 250, ->
#         $newContent.css
#           position: 'relative'
#       )
#     )
#     $oldContent.velocity({ translateY: newContentHeight, opacity: 0 }, 250, ->
#       $oldContent.remove()
#       # $('html, body').animate({ scrollTop: 165 }, 150)
#     )

#   slideyForwards: (content) =>
#     $('html').removeClass('hero-header')

#     $newContent = $(content).css
#       opacity: 0
#       position: 'absolute'
#       top: 0
#     $oldContent = $('#content .section-wrap:first')

#     $('#content').append($newContent)

#     $newContent.velocity({ translateX: '100%' }, 0, ->
#       $newContent.velocity({ translateX: 0, opacity: 1 }, 250, ->
#         $newContent.css
#           position: 'relative'
#       )
#     )
#     $oldContent.velocity({ translateX: '-100%', opacity: 0 }, 250, ->
#       $oldContent.remove()
#       # $('html, body').animate({ scrollTop: 165 }, 150)
#     )

#   slideyBackwards: (content) =>
#     $newContent = $(content).css
#       opacity: 0
#       position: 'absolute'
#       top: 0
#     $oldContent = $('#content .section-wrap:first')

#     $('#content').append($newContent)

#     $newContent.velocity({ translateX: '-100%' }, 0, ->
#       $newContent.velocity({ translateX: 0, opacity: 1 }, 250, ->
#         $newContent.css
#           position: 'relative'
#       )
#     )
#     $oldContent.velocity({ translateX: '100%', opacity: 0 }, 250, ->
#       $oldContent.remove()
#       # $('html, body').animate({ scrollTop: 165 }, 150)
#     )



# new SlideyPages()