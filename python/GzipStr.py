import StringIO
import gzip

def GzipStr(s):
    out = StringIO.StringIO()
    f = gzip.GzipFile(fileobj=out, mode='w')
    f.write(s)
    f.close()
    data = out.getvalue()
    return data
