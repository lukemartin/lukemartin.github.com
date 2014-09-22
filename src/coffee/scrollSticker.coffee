# class ScrollSticker
#   constructor: ->
#     @binders()

#   binders: ->
#     $(window).scroll(->
#       scrollTop = $(window).scrollTop()
#       if scrollTop >= 165
#         $('html').addClass('nav-fixed')
#       else
#         $('html').removeClass('nav-fixed')
#     )

# # new ScrollSticker()