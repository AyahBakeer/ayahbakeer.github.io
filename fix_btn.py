with open('/Users/mac/Downloads/mobile-app-developer-portfolio/assets/index-BF_Psxjf.js', 'r') as f:
    content = f.read()

old_button = 'className: "mt-3 text-xs px-4 py-1.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors z-10 cursor-pointer pointer-events-auto"'
new_button = 'style: { backgroundColor: "black", color: "white", padding: "8px 16px", marginTop: "12px", borderRadius: "9999px", fontWeight: "500", fontSize: "12px", cursor: "pointer", pointerEvents: "auto", display: "inline-block" }'

if old_button in content:
    content = content.replace(old_button, new_button)
    with open('/Users/mac/Downloads/mobile-app-developer-portfolio/assets/index-BF_Psxjf.js', 'w') as f:
        f.write(content)
    print("Fixed button styling")
else:
    print("Old button not found")
