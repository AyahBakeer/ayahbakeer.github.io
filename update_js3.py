with open('/Users/mac/Downloads/mobile-app-developer-portfolio/assets/index-BF_Psxjf.js', 'r') as f:
    content = f.read()

target = '{ name: "Rafiq", tagline: "Your Companion", description: "Upgraded and improved an existing application to enhance performance and compatibility.", icon: $p, uiImage: $p, color: "bg-blue-50" }'
replacement = '{ name: "Rafiq", tagline: "Your Companion", description: "Upgraded and improved an existing application to enhance performance and compatibility.", icon: $p, uiImage: $p, color: "bg-blue-50", iosLink: "https://apps.apple.com/us/app/rafiq-carpool-%D8%B1%D9%81%D9%8A%D9%82-%D8%B9-%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82/id1581397145" }'

content = content.replace(target, replacement)

with open('/Users/mac/Downloads/mobile-app-developer-portfolio/assets/index-BF_Psxjf.js', 'w') as f:
    f.write(content)
print("Rafiq updated successfully")
