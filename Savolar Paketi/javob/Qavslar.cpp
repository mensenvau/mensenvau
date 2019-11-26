#include<iostream>
using namespace std;
int main()
{
	string s,a="";
	cin>>s;
	
	for(int i=0;i<s.size();i++)
	{
		if(s[i]=='(' || s[i]=='{' || s[i]=='[')
		a=a+s[i];
	   else
	{
	    if(a.size()==0) {cout<<"NO"; return 0;}
	    
	    switch(s[i])
	    {
	    	case ')': if(a[a.size()-1]=='(') a.erase(a.size()-1,1); else {cout<<"NO"; return 0;} break;
	    	case '}': if(a[a.size()-1]=='{') a.erase(a.size()-1,1); else {cout<<"NO"; return 0;} break;
	    	case ']': if(a[a.size()-1]=='[') a.erase(a.size()-1,1); else {cout<<"NO"; return 0;} break;
	    	default : return 0; break;
	    }
	}
}
	if(a.size()==0) cout<<"YES"; else cout<<"NO";
}
