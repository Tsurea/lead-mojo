package main

import (
	"fmt"
    "net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Hello world\n")
}

func main() {
	router := http.NewServeMux()
	http.HandleFunc("/hello", hello)
	http.ListenAndServe(":5000", nil)
}
