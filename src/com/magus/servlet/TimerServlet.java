package com.magus.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Chap11
 * @author 	lian
 * @date 	2014-4-25
 * @time	上午9:51:08
 */
public class TimerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private int count;
       
    public TimerServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		count++;
		System.out.println("请求第-"+count+"-到来了...");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		@SuppressWarnings("deprecation")
		// 返回字符串
//		String result = request.getParameter("name")+", 服务器时间: "+new Date().toLocaleString()+", 请校对";
		
//		// 返回Json对象
		String result = "{author:'"+request.getParameter("name")+"',time:'"+new Date().toLocaleString()+"'}";
		out.println(result);
		
		out.flush();
		out.close();
	}

}
