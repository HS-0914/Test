#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<string>> clothes) {
    int answer = 1;
    int i = 1; // 인덱스
    int j = 0; // 카테고리, 옷 개수
    int n = 1; // 
    int item = 0;
    int size = clothes.size();
    vector<string> itemList;
    vector<int> combination;
    
    itemList.emplace_back(clothes[0][1]);
    combination.emplace_back(1);
    // 값 설정
    
    while(i < size)
    {
        j = 0;
        int flag = 0;
        while(j < n)
        {
          if(itemList[j].compare(clothes[i][1])) {
            flag = 1;
          } else {
            flag = 0;
          }
          j++;
          /*
          // 카테고리 비교 같으면 0 리턴
          if(itemList[j].compare(clothes[i][1]))
          {
            itemList.emplace_back(clothes[i][1]);
            combination.emplace_back(0);
            n++;
            break;
          }
          j++;
          */
        }
        if(flag) {
          itemList.emplace_back(clothes[i][1]);
          combination.emplace_back(0);
          n++;
        }
        
        j = 0;
        while(j < n)
        {
            if(!itemList[j].compare(clothes[i][1]))
            {
                combination[j]++;
                break;
            }
            j++;
        }
        
        i++;
    }

    i = 0;
    
    // 확률 구하기
    while(i < n) 
        answer *= combination[i++] + 1; // n에서 선택을 안하는 경우 추가
    
    
    // 최소 한가지는 의류 착용
    answer--; 
    
    return answer;
}