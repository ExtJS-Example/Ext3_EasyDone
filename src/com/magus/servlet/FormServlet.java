package com.magus.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Chap15
 * @author 	lian
 * @date 	2014-4-25
 * @time	上午9:50:25
 */
public class FormServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public FormServlet() {
        super();
    }

    public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	response.setContentType("text/html;charset=utf-8");
    	PrintWriter out = response.getWriter();
    	
    	print(request, "userName");
    	print(request, "password");
    	print(request, "extra");
    	print(request, "id");
    	
    	out.println("{success: true, msg: '成功!', time: '2014-04-23-PM'}");
    	out.flush();
    	out.close();
    }
    
    public void print(HttpServletRequest request, String para) {
    	System.out.println(para+"--"+request.getParameter(para));
    }

}
