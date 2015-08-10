package com.magus.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Chap11
 * @author 	lian
 * @date 	2014-4-25
 * @time	上午9:51:15
 */
public class CityServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public CityServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("请求到来了...");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		// 返回Json对象
		String result = "[{id:'1',name:'长沙市'},{id:'2',name:'湘潭市'},{id:'3',name:'株洲市'},{id:'4',name:'邵阳市'}]";
		out.println(result);
		
		out.flush();
		out.close();
	}

}
