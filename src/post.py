#!/usr/bin/python
#Send post request
import requests
import sys
pdata = str(sys.argv[2])
r = requests.post(str(sys.argv[1]), data=pdata)
print(r.status_code, r.reason)
print(r.text[:300] + '...')
