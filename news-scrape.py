import requests
from bs4 import BeautifulSoup
url = "https://inshorts.com/en/read/national"
# f = open("news.txt","w")
f = open("news.json","w")

#get html
r = requests.get(url)
htmlContent  = r.content
# print(htmlContent)

# Parse the content

soup = BeautifulSoup(htmlContent, 'html.parser')
# print(soup)

newsClass = soup.find_all('div', class_='news-card-content')
newss = []
i = 1
for elem in newsClass:
    if i == 10:
        break
    else:
        # print(elem.get_text())
        newss.append(elem.get_text()) 
        f.write(f" \" {elem.get_text()} \", \n")
    i += 1
        # print(newss)

# f.write(str(newss))





f.close()

