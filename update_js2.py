import re

with open('/Users/mac/Downloads/mobile-app-developer-portfolio/assets/index-BF_Psxjf.js', 'r') as f:
    content = f.read()

# 1. Fix the eg array
old_eg_start = content.find('eg = [{')
if old_eg_start != -1:
    old_eg_end = content.find('], ng = [', old_eg_start)
    if old_eg_end != -1:
        new_eg = '''eg = [{ name: "Neeva", tagline: "Elegant Shopping", description: "Built and developed a modern shopping app with a focus on clean design and smooth user experience.", icon: QA, uiImage: kA, color: "bg-stone-100", iosLink: "https://apps.apple.com/us/app/neeva/id6759149638", androidLink: "https://play.google.com/store/apps/details?id=com.neeva.neevaapp&hl=en_ZA" }, { name: "Dawami", tagline: "Location Tracking", description: "Developed a location-based app for tracking employee presence within defined areas.", icon: KA, uiImage: JA, color: "bg-teal-50", iosLink: "https://apps.apple.com/us/app/dawami-%D8%AF-%D9%88%D8%A7%D9%85%D9%8A/id6739335704", androidLink: "https://play.google.com/store/apps/details?id=com.jawwal.dawami&hl=en" }, { name: "Rafiq", tagline: "Your Companion", description: "Upgraded and improved an existing application to enhance performance and compatibility.", icon: $p, uiImage: $p, color: "bg-blue-50" }, { name: "Fawri", tagline: "Instant Deliveries", description: "Worked on improving performance, fixing issues, and maintaining stability in a high-traffic mobile application.", icon: Pp, uiImage: Pp, color: "bg-orange-50", iosLink: "https://apps.apple.com/us/app/fawri/id6445875477", androidLink: "https://play.google.com/store/apps/details?id=fawri.app.shop&hl=en" }'''
        content = content[:old_eg_start] + new_eg + content[old_eg_end:]

# 2. Add button to small grid
small_target = 'children: c.description })]'
small_replacement = '''children: c.description }), (c.iosLink || c.androidLink) ? Y.jsx("button", { onClick: () => { const ua = navigator.userAgent; if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) { if(c.iosLink) window.location.href = c.iosLink; else window.location.href = c.androidLink; } else if (/android/i.test(ua)) { if(c.androidLink) window.location.href = c.androidLink; else window.location.href = c.iosLink; } else { if(c.iosLink) window.open(c.iosLink, '_blank'); else window.open(c.androidLink, '_blank'); } }, className: "mt-3 text-xs px-4 py-1.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors z-10 cursor-pointer pointer-events-auto", children: "View App" }) : null]'''
content = content.replace(small_target, small_replacement)

# 3. Add button to large cards
large_target = 'children: c.tagline })]'
large_replacement = '''children: c.tagline }), (c.iosLink || c.androidLink) ? Y.jsx("button", { onClick: () => { const ua = navigator.userAgent; if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) { if(c.iosLink) window.location.href = c.iosLink; else window.location.href = c.androidLink; } else if (/android/i.test(ua)) { if(c.androidLink) window.location.href = c.androidLink; else window.location.href = c.iosLink; } else { if(c.iosLink) window.open(c.iosLink, '_blank'); else window.open(c.androidLink, '_blank'); } }, className: "mt-4 text-sm px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors z-10 cursor-pointer inline-block", children: "View App" }) : null]'''
content = content.replace(large_target, large_replacement)

with open('/Users/mac/Downloads/mobile-app-developer-portfolio/assets/index-BF_Psxjf.js', 'w') as f:
    f.write(content)
print("Updated successfully")
