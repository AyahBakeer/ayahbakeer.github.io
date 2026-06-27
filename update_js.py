with open('/Users/mac/Downloads/mobile-app-developer-portfolio/assets/index-BF_Psxjf.js', 'r') as f:
    content = f.read()

target = 'Y.jsx(oe.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: !0 }, className: `w-full ${c.color} rounded-[3rem] p-8 md:p-16 overflow-hidden`, children: Y.jsx("div", { className: "w-full flex justify-center items-center", children: Y.jsx(oe.img, { whileHover: { scale: 1.02 }, transition: { duration: .5 }, src: c.uiImage, alt: c.name, className: "w-full h-auto max-h-[600px] object-contain rounded-xl" }) }) })'

if target in content:
    replacement = '(c.uiImage ? ' + target + ' : null)'
    content = content.replace(target, replacement)
    with open('/Users/mac/Downloads/mobile-app-developer-portfolio/assets/index-BF_Psxjf.js', 'w') as f:
        f.write(content)
    print('Replaced successfully')
else:
    print('Target not found')
