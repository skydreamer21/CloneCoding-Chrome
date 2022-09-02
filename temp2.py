# Q1
import numpy as np

price = [100, 500, 250, 50]
amount = [35, 10, 25, 40]

puchase_price = np.dot(price, amount)
print(puchase_price)

# Q2
Y_amount = np.array([0, 50, 50, 0])

np.matmul(price, Y_amount.T)

# Q3
import math

def NormDif(v):
  norm1 = 0;
  norm2 = 0;
  for elem in v:
    norm1 += abs(elem)
    norm2 += pow(elem, 2)
  norm2 = round(math.sqrt(norm2), 2)
  return abs(norm2 - norm1)

vector = np.array([3,-1,8,9])
print(NormDif(vector))

# Q4
def error(x, y, type):
    diff = x-y;
    len = diff.size;
    abs_sum = 0;
    square_sum = 0;
    for elem in diff:
      abs_sum += abs(elem)
      square_sum += pow(elem, 2)
    if (type == "MSE"):
      return square_sum / len
    else:
       return abs_sum / len


x = np.array([2085,1815,2235,1400,2500,1430,3070,2000,1299,1180])
y = np.array([2103,2099,1985,1630,2480,1300,3200,1990,1405,1210])
mse = error(x, y, "MSE")
mae = error(x, y, "MAE")
print(f"({mse}, {mae})")

# Q5 시작 전
# 하나의 matrix로 합치기
# 참고링크 : https://runebook.dev/ko/docs/numpy/reference/generated/numpy.stack

g = np.array([1, 3])
h = np.array([2, 6])

mat = np.stack((g, h))
print("<result>")
print(mat)
rank = np.linalg.matrix_rank(mat)
print(f"rank : {rank}")


# Q5