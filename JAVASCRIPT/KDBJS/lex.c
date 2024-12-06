%option noyywrap
%{
    #include<stdio.h>
    int v = 0 , c = 0 ;
%}

%%
[aeiouAEIOU] {v++;}
[A-Za-z] {c++;}
%%
int main(){
    printf("entre thee string");
    yylex();
    printf("v=%d",v);
    printf("v=%d",c);
    return 1;
}